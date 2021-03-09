<?php


namespace Rainestech\AdminApi\Utils;


use Illuminate\Support\Facades\Storage;
use Rainestech\AdminApi\Entity\FileStorage;
use Rainestech\AdminApi\Entity\FileStorage as FsStorage;
use Rainestech\AdminApi\Requests\StorageRequest;

trait LocalStorage {
    /**
     * @param $path
     * @return LocalStorage
     */
    private function createTagFolder($tag) {
        if (Storage::disk('app')->exists($tag)) {
            return $this;
        }

        Storage::disk('app')->makeDirectory($tag);
        return $this;
    }

    public function saveFile($file, $tag) {

        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $name = sha1($filename . time()) . '.' . $extension;

        if (is_null($tag)) {
            abort(422,
                "Can't write to undefined path."
            );
        }

        $saved = Storage::disk('app')->putFileAs($tag, $file, $name);
        if ($saved === false) {
            abort(422,
                "Can't write file to path ({$tag})"
            );
        }

        return $name;
    }

    public function saveLocal(StorageRequest $request) {
        if ($request->has('id')) {
            return $this->editFile($request);
        }

        $fs = new FsStorage($request->except(['file', 'id', 'link']));
        $fs->link = $this->createTagFolder($request->get('tag'))
            ->saveFile($request->file('file'), $request->get('tag'));

        $fs->storageType = 'local';

        $fs->save();

        return $fs;
    }

    private function deleteFile($tag, $name) {
        $path = $tag . DIRECTORY_SEPARATOR . $name;
        Storage::disk('app')->delete($path);
    }

    public function removeFile(FileStorage $fileStorage) {
        $this->deleteFile($fileStorage->tag, $fileStorage->name);
        $fileStorage->delete();
    }

    public function editFile(StorageRequest $request) {
        $fs = FsStorage::findOrFail($request->get('id'));

        $this->deleteFile($fs->tag, $fs->link);

        $fs->fill($request->except(['file', 'id', 'link']));
        $fs->link = $this->saveFile($request->file('file'), $fs->tag);
        $fs->storageType = 'local';

        $fs->save();

        return $fs;
    }
}

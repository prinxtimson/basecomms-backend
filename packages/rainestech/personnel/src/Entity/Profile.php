<?php

namespace Rainestech\Personnel\Entity;

use Rainestech\AdminApi\Entity\BaseModel;
use Rainestech\AdminApi\Entity\FileStorage;
use Rainestech\AdminApi\Entity\Users;

/**
 * Rainestech\Personnel\Entity\Profile
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $modified_by
 * @property string|null $role
 * @property string|null $address
 * @property string|null $city
 * @property string|null $country
 * @property string|null $skillSet
 * @property string|null $description
 * @property int $views
 * @property int|null $userId
 * @property-read \Illuminate\Database\Eloquent\Collection|\Rainestech\Personnel\Entity\Channels[] $channels
 * @property-read int|null $channels_count
 * @property-read \Illuminate\Database\Eloquent\Collection|FileStorage[] $docs
 * @property-read int|null $docs_count
 * @property-read Users $editor
 * @property-read mixed $file_no
 * @property-read mixed $project_no
 * @property-read Users|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|Profile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Profile newQuery()
 * @method static Builder|BaseModel order()
 * @method static \Illuminate\Database\Eloquent\Builder|Profile query()
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereModifiedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereSkillSet($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereViews($value)
 * @mixin \Eloquent
 * @property string|null $title
 * @property string|null $email
 * @property string|null $avatar
 * @property string|null $name
 * @property int|null $bcId
 * @property int|null $bcPage
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereBcId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereBcPage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereTitle($value)
 */
class Profile extends BaseModel
{
    protected $table = 'profiles_candidates';
    protected $guarded = ['id'];
    protected $dateFormat = 'Y-m-d h:m:s';
    protected $with = ['user'];
    protected $appends = ['fileNo', 'projectNo', 'channels'];

    public function user()
    {
        return $this->belongsTo(Users::class, 'userId');
    }

    public function docs()
    {
        return $this->belongsToMany(FileStorage::class, 'profiles_candidates_files', 'fId', 'cId');
    }

    public function getFileNoAttribute() {
        return $this->docs->count();
    }

    public function getProjectNoAttribute() {
        return $this->user->channels->count();
    }

    public function getChannelsAttribute() {
        return $this->user->channels;
    }

}

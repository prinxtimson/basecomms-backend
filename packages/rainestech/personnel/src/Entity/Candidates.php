<?php

namespace Rainestech\Personnel\Entity;

use Rainestech\AdminApi\Entity\BaseModel;
use Rainestech\AdminApi\Entity\FileStorage;
use Rainestech\AdminApi\Entity\Users;


/**
 * Rainestech\Personnel\Entity\Candidates
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
 * @property-read Users $editor
 * @property-read \Illuminate\Database\Eloquent\Collection|FileStorage[] $files
 * @property-read int|null $files_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Rainestech\Personnel\Entity\Projects[] $projects
 * @property-read int|null $projects_count
 * @property-read Users|null $users
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates newQuery()
 * @method static Builder|BaseModel order()
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates query()
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereModifiedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereSkillSet($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Candidates whereViews($value)
 * @mixin \Eloquent
 */
class Candidates extends BaseModel
{
    protected $table = 'profiles_candidates';
    protected $guarded = ['id'];
    protected $dateFormat = 'Y-m-d h:m:s';
    protected $with = ['user'];
    protected $appends = ['fileNo', 'projectNo'];

    public function users()
    {
//        return $this->belongsToMany(Users::class, 'profiles_recruiters_user', 'uId', 'rId');
        return $this->belongsTo(Users::class, 'userId');
    }

    public function docs()
    {
        return $this->belongsToMany(FileStorage::class, 'profiles_candidates_files', 'fId', 'cId');
    }

    public function projects()
    {
        return $this->belongsToMany(Projects::class, 'profile_candidates_projects', 'pId', 'cId');
    }

    public function getFileNoAttribute() {
        return $this->docs->count();
    }

    public function getProjectNoAttribute() {
        return $this->projects->count();
    }

}

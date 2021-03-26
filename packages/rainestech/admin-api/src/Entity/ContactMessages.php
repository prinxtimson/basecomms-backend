<?php

namespace Rainestech\AdminApi\Entity;


/**
 * Rainestech\AdminApi\Entity\ContactMessages
 *
 * @property-read \Rainestech\AdminApi\Entity\Users $editor
 * @method static \Illuminate\Database\Eloquent\Builder|ContactMessages newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactMessages newQuery()
 * @method static Builder|BaseModel order()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactMessages query()
 * @mixin \Eloquent
 */
class ContactMessages extends BaseModel {
    protected $table = 'admin_contact';
    protected $guarded = ['id'];
}

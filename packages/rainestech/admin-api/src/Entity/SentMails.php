<?php

namespace Rainestech\AdminApi\Entity;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;

class SentMails extends BaseModel {
    protected $table = 'notifications_mail_send';
    protected $guarded = ['id'];
}

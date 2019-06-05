# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|gruop_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|
|email|string|null: false|
|encrypted_password|string|null: false|
|created_at|datetime|null: false|
|updated_at|datetime|null: false|
|group_id|integer|null: false, foreign_key: true|

### Index
- add_index :users, :email, unique: true
- add_index :users, :name, unique: true

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|created_at|datetime|null: false|
|updated_at|datetime|null: false|
|gruop_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|
|created_at|datetime|null: false|
|updated_at|datetime|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members
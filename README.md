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

### Index
- add_index :users, :email, unique: true
- add_index :users, :name, unique: true

### Association
- has_many :groups, through: :members
- belongs_to :group, through: :members



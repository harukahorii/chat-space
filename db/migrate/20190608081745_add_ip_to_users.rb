class AddIpToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :current_sign_in_ip, :datetime
  end
end

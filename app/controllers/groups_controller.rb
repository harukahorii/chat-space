class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]
  def index
  end
  def new
    @group = Group.new
    @group.users << current_user
  end

  def update
  end

  def create
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  def edit
  end

  private
  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end
  
  def set_group
    @group = Group.find(params[:id])
  end
end

class Api::MessagesController < ApplicationController
  def index
    @messages = Group.find(params[:group_id]).messages.includes(:user).where('id > ?', params[:id])

  end
end
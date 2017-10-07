class Blog < ApplicationRecord
  belongs_to :user
  mount_uploader :imgcover, BlogUploader
  validates :tittle, presence: true
  validates :content, presence: true
  validates :imgcover, presence: true
  has_many :comments, dependent: :destroy
end

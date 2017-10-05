class Image < ApplicationRecord
  belongs_to :user
  belongs_to :album
  validates :url, presence: true
  mount_uploader :url
end

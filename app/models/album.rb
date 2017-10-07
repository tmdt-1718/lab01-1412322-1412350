class Album < ApplicationRecord
  belongs_to :user
  has_many :images, dependent: :destroy
  validates :imgcover, presence: true
  validates :name, presence: true
end 

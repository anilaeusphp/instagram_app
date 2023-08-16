class Post < ApplicationRecord
  belongs_to :user

  has_many_attached :images

  has_many :likes

  has_many :likers, through: :likes, source: :user

  validates :caption, presence: true
  validates :images, presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 1..(25.megabytes) }
end

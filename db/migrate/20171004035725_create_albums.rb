class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.integer :totalview
      t.string :imgcover
      t.references :user, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end

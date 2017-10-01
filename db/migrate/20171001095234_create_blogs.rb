class CreateBlogs < ActiveRecord::Migration[5.1]
  def change
    create_table :blogs do |t|
      t.references :user, foreign_key: true
      t.string :tittle
      t.text :content
      t.integer :view
      t.string :imgcover

      t.timestamps
    end
    add_index :blogs, [:user_id, :created_at]    
  end
end

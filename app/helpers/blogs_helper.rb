module BlogsHelper
    def content_summerize(content)
        if(content.length > 100)
          content[0..99] + "..."
        else
          content
        end
    end
end

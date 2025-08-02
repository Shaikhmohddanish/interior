$ErrorActionPreference = "Stop"

# Define image URLs and their destination paths
$imageDefinitions = @(
    # Living Room Images
    @{
        Url = "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"
        Path = "public\images\living-room\modern-living-room.jpg"
        Description = "Modern Living Room with light color scheme"
    },
    @{
        Url = "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
        Path = "public\images\living-room\cozy-living-area.jpg"
        Description = "Cozy Living Area with warm tones"
    },
    @{
        Url = "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
        Path = "public\images\living-room\spacious-living-room.jpg"
        Description = "Spacious Living Room with high ceilings"
    },
    @{
        Url = "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        Path = "public\images\living-room\minimalist-living-room.jpg"
        Description = "Minimalist Living Room with clean lines"
    },
    @{
        Url = "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
        Path = "public\images\living-room\luxury-living-room.jpg"
        Description = "Luxury Living Room with elegant furnishings"
    },
    @{
        Url = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
        Path = "public\images\living-room\contemporary-living-space.jpg"
        Description = "Contemporary Living Space with modern aesthetic"
    },

    # Bedroom Images
    @{
        Url = "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
        Path = "public\images\bedroom\serene-bedroom.jpg"
        Description = "Serene Bedroom with calming colors"
    },
    @{
        Url = "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg"
        Path = "public\images\bedroom\master-bedroom-suite.jpg"
        Description = "Master Bedroom Suite with luxury finishes"
    },
    @{
        Url = "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg"
        Path = "public\images\bedroom\guest-bedroom.jpg"
        Description = "Guest Bedroom with welcoming ambiance"
    },

    # Kitchen Images
    @{
        Url = "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg"
        Path = "public\images\kitchen\modern-kitchen.jpg"
        Description = "Modern Kitchen with sleek appliances"
    },
    @{
        Url = "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
        Path = "public\images\kitchen\gourmet-kitchen.jpg"
        Description = "Gourmet Kitchen with premium countertops"
    },
    @{
        Url = "https://images.pexels.com/photos/3935355/pexels-photo-3935355.jpeg"
        Path = "public\images\kitchen\open-plan-kitchen.jpg"
        Description = "Open-plan Kitchen connecting to living space"
    },

    # Bathroom Images
    @{
        Url = "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg"
        Path = "public\images\bathroom\luxury-bathroom.jpg"
        Description = "Luxury Bathroom with elegant fixtures"
    },
    @{
        Url = "https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg"
        Path = "public\images\bathroom\spa-like-bathroom.jpg"
        Description = "Spa-like Bathroom with relaxing atmosphere"
    },

    # Commercial Images
    @{
        Url = "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
        Path = "public\images\commercial\corporate-office.jpg"
        Description = "Corporate Office with professional design"
    },
    @{
        Url = "https://images.pexels.com/photos/3701434/pexels-photo-3701434.jpeg"
        Path = "public\images\commercial\retail-space.jpg"
        Description = "Retail Space with attractive displays"
    },

    # Hero Images
    @{
        Url = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        Path = "public\images\hero\modern-living-room.jpg"
        Description = "Modern Living Room for hero section"
    },

    # Home Featured Images
    @{
        Url = "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        Path = "public\images\home\featured-1.jpg"
        Description = "Featured home interior 1"
    },
    @{
        Url = "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
        Path = "public\images\home\featured-2.jpg"
        Description = "Featured home interior 2"
    },

    # Process Images
    @{
        Url = "https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg"
        Path = "public\images\process\interior-design-process.jpg"
        Description = "Interior Design Process visualization"
    },

    # Design Images
    @{
        Url = "https://images.pexels.com/photos/6958511/pexels-photo-6958511.jpeg"
        Path = "public\images\design\interior-sketch.jpg"
        Description = "Interior design sketch"
    },
    @{
        Url = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        Path = "public\images\design\interior-render.jpg"
        Description = "3D rendered interior design"
    },

    # Services Images
    @{
        Url = "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg"
        Path = "public\images\services\2d-3d-layouts.jpg"
        Description = "2D/3D Layouts service preview"
    },
    @{
        Url = "https://images.pexels.com/photos/5418896/pexels-photo-5418896.jpeg"
        Path = "public\images\services\turnkey-projects.jpg"
        Description = "Turnkey Projects service preview"
    },
    @{
        Url = "https://images.pexels.com/photos/6444257/pexels-photo-6444257.jpeg"
        Path = "public\images\services\design-planning.jpg"
        Description = "Design & Planning service preview"
    },
    @{
        Url = "https://images.pexels.com/photos/7546772/pexels-photo-7546772.jpeg"
        Path = "public\images\services\sidebar-image.jpg"
        Description = "Services sidebar image"
    },

    # Services Specific Pages Images
    @{
        Url = "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
        Path = "public\images\services\2d-3d\banner.jpg"
        Description = "2D/3D Layouts banner"
    },
    @{
        Url = "https://images.pexels.com/photos/7147259/pexels-photo-7147259.jpeg"
        Path = "public\images\services\2d-3d\feature.jpg"
        Description = "2D/3D Layouts feature image"
    },
    @{
        Url = "https://images.pexels.com/photos/9937444/pexels-photo-9937444.jpeg"
        Path = "public\images\services\turnkey\banner.jpg"
        Description = "Turnkey Projects banner"
    },
    @{
        Url = "https://images.pexels.com/photos/6980628/pexels-photo-6980628.jpeg"
        Path = "public\images\services\turnkey\feature.jpg"
        Description = "Turnkey Projects feature image"
    },
    @{
        Url = "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg"
        Path = "public\images\services\design-planning\banner.jpg"
        Description = "Design & Planning banner"
    },
    @{
        Url = "https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg"
        Path = "public\images\services\design-planning\feature.jpg"
        Description = "Design & Planning feature image"
    },

    # Pricing Page Image
    @{
        Url = "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg"
        Path = "public\images\pricing\banner.jpg"
        Description = "Pricing page banner"
    }
)

# Download each image
foreach ($imageDef in $imageDefinitions) {
    Write-Host "Downloading $($imageDef.Description) to $($imageDef.Path)..."
    try {
        Invoke-WebRequest -Uri $imageDef.Url -OutFile $imageDef.Path
        Write-Host "Successfully downloaded $($imageDef.Path)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($imageDef.Path): $_" -ForegroundColor Red
    }
}

Write-Host "All downloads completed!" -ForegroundColor Cyan

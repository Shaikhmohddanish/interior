$ErrorActionPreference = "Stop"

# First batch of images - Living Room
$imageDefinitions = @(
    # Living Room Images
    @{
        Url = "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"
        Path = "public\images\living-room\modern-living-room.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
        Path = "public\images\living-room\cozy-living-area.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
        Path = "public\images\living-room\spacious-living-room.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        Path = "public\images\living-room\minimalist-living-room.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
        Path = "public\images\living-room\luxury-living-room.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
        Path = "public\images\living-room\contemporary-living-space.jpg"
    }
)

# Download each image
foreach ($imageDef in $imageDefinitions) {
    Write-Host "Downloading $($imageDef.Url) to $($imageDef.Path)..."
    try {
        Invoke-WebRequest -Uri $imageDef.Url -OutFile $imageDef.Path
        Write-Host "Successfully downloaded $($imageDef.Path)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($imageDef.Path): $_" -ForegroundColor Red
    }
}

Write-Host "Living room images download completed!" -ForegroundColor Cyan

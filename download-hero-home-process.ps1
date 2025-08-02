$ErrorActionPreference = "Stop"

# Hero, Home, and Process Images
$imageDefinitions = @(
    # Hero Images
    @{
        Url = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        Path = "public\images\hero\modern-living-room.jpg"
    },

    # Home Featured Images
    @{
        Url = "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        Path = "public\images\home\featured-1.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
        Path = "public\images\home\featured-2.jpg"
    },

    # Process Images
    @{
        Url = "https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg"
        Path = "public\images\process\interior-design-process.jpg"
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

Write-Host "Hero, home, and process images download completed!" -ForegroundColor Cyan

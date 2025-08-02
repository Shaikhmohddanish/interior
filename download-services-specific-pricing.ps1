$ErrorActionPreference = "Stop"

# Service-specific and Pricing Images
$imageDefinitions = @(
    # Services Specific Pages Images
    @{
        Url = "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
        Path = "public\images\services\2d-3d\banner.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/7147259/pexels-photo-7147259.jpeg"
        Path = "public\images\services\2d-3d\feature.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/9937444/pexels-photo-9937444.jpeg"
        Path = "public\images\services\turnkey\banner.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/6980628/pexels-photo-6980628.jpeg"
        Path = "public\images\services\turnkey\feature.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg"
        Path = "public\images\services\design-planning\banner.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg"
        Path = "public\images\services\design-planning\feature.jpg"
    },

    # Pricing Page Image
    @{
        Url = "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg"
        Path = "public\images\pricing\banner.jpg"
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

Write-Host "Service-specific and pricing images download completed!" -ForegroundColor Cyan

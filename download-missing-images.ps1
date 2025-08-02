$ErrorActionPreference = "Stop"

# Missing images
$imageDefinitions = @(
    # Services - 2D-3D - Feature image
    @{
        Url = "https://images.pexels.com/photos/7147259/pexels-photo-7147259.jpeg"
        Path = "public\images\services\2d-3d\feature.jpg"
    },
    
    # Services - Turnkey - Banner image
    @{
        Url = "https://images.pexels.com/photos/9937444/pexels-photo-9937444.jpeg"
        Path = "public\images\services\turnkey\banner.jpg"
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

Write-Host "Missing images download completed!" -ForegroundColor Cyan

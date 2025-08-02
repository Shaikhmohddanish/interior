$ErrorActionPreference = "Stop"

# Design and Services Images
$imageDefinitions = @(
    # Design Images
    @{
        Url = "https://images.pexels.com/photos/6958511/pexels-photo-6958511.jpeg"
        Path = "public\images\design\interior-sketch.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        Path = "public\images\design\interior-render.jpg"
    },

    # Services Images
    @{
        Url = "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg"
        Path = "public\images\services\2d-3d-layouts.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/5418896/pexels-photo-5418896.jpeg"
        Path = "public\images\services\turnkey-projects.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/6444257/pexels-photo-6444257.jpeg"
        Path = "public\images\services\design-planning.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/7546772/pexels-photo-7546772.jpeg"
        Path = "public\images\services\sidebar-image.jpg"
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

Write-Host "Design and services images download completed!" -ForegroundColor Cyan

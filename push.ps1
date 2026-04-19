# Usage: .\push.ps1 "your commit message"
# Defaults to "deploy" if no message given
param([string]$msg = "deploy")

$lock = ".git/index.lock"
$maxTries = 10

for ($i = 1; $i -le $maxTries; $i++) {
    if (Test-Path $lock) {
        Write-Host "Lock found, waiting... ($i/$maxTries)"
        Remove-Item $lock -Force -ErrorAction SilentlyContinue
        Start-Sleep -Milliseconds 300
    }

    git add -u
    if ($LASTEXITCODE -eq 0) { break }

    if ($i -eq $maxTries) {
        Write-Host "Could not acquire git lock after $maxTries attempts. Try closing VS Code or other git tools." -ForegroundColor Red
        exit 1
    }
    Start-Sleep -Milliseconds 500
}

git commit -m $msg
git push origin main
Write-Host "Done." -ForegroundColor Green

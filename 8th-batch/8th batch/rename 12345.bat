@echo off
setlocal enabledelayedexpansion

rem Loop through each folder
for /d %%i in (*) do (
    rem Navigate to the folder
    pushd "%%i"
    
    rem Loop through each file
    set count=1
    for %%f in (*) do (
        rem Rename the file
        ren "%%f" "!count!.bmp"
        set /a count+=1
    )

    rem Move back to the original directory
    popd
)

echo All files renamed.
pause

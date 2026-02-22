@echo off
echo ==========================
echo Git Add, Commit, Push
echo ==========================

git add .

set /p msg=Commit-Nachricht eingeben: 

git commit -m "%msg%"

git push

echo ==========================
echo Fertig!
pause
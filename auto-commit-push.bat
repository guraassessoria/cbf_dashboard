@echo off
REM Script para auto commit e push após cada alteração
REM Uso: execute este script após editar arquivos

git add .
git commit -m "Auto commit: alterações automáticas"
git push

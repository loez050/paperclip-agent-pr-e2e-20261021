# Paperclip Agent PR E2E Fixture

Disposable public repository for validating the Paperclip Agent delivery path:

`isolated worktree -> edit -> test -> commit -> Windows Git push -> agent/* PR -> Actions -> github-actions approval -> squash merge`

This repository intentionally contains only the small fixture code and workflows needed for that acceptance test.

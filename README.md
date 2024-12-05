# magic replace action

This is yet another find and replace github action with different favour

## Usage

```yaml
name: Replace Action
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: find and replace
        uses: shad02w/magic-replace-action
        with:
          prefix: <
          suffix: >
          patterns: |
            firstname: John
            lastname: Doe 
          files: "*/*.txt"
```

the action will transform following .txt from

```
My name is <firstname> <lastname>, and <firstname> is my firstname
```

to 

```
My name is John Doe, and John is my firstname
```





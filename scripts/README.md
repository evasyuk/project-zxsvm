#DEPLOY
1. Deploy requires several sensitive files to be presented
 - .firebaserc
 - firebase.json
 
2. Sensitive files can't be tracked in GIT

3. Sensitive files can be re-created in-time of deployment from CI/CD secrets

4. Transform file to Base64 secret string
    - manually
        - change/adjust helperVar.js to perform file conversation to Base64 string
        
5. Save secret in CI/CD settings
    - manually
        - open project settings
        - open secrets setup
        - add secret name
        - add secret content

6. Transform secret string to file during deploy action
    - manually
        - change/adjust .github/workflows/deploy.yml to use secrets
            - content sample: - run: FIREBASE_RC=${{ secrets.FIREBASE_RC }} FIREBASE_JSON=${{ secrets.FIREBASE_JSON }} npm run use_secrets
        - add/change scripts/helperVar.js to parse variable
            - you need to specify secret's name and file path to create new file
    - automatically
        - just run CI/CD job
        - one of the "deploy.yml" steps is to "use_secrets"

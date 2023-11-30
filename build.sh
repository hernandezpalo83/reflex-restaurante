cd .env
cd bin
source activate
cd ..
cd ..
pip install --upgrade pip
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rm -fr public
unzip frontend.zip -d public
rm -f frontend.zip
deactivate
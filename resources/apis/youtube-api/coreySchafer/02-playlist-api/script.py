import json
import os 
from googleapiclient.discovery import build
os.system('cls')
api_key = 'AIzaSyDoVmGn11RbYZEIaFIuvCpLumzBeyvDmWM'
youtube = build('youtube','v3',developerKey=api_key)

pl_request = youtube.playlistItems().list(
        part='contentDetails,snippet',
        playlistId='PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p'
        
)
pl_response = pl_request.execute()


# with open('json_file.json','w') as f:
    # f.write(json.dumps(pl_response, indent=2))

f = open('json_file.json','w')
f.write(json.dumps(pl_response, indent=2))

f.close()
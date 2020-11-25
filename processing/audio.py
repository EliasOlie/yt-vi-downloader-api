from pytube import YouTube
import sys

def down_audio(vurl) -> str:
    
    yt = YouTube(vurl)

    audip_opt = yt.streams.get_audio_only()

    audip_opt.download('processing/output')

    print('Done!')
    
down_audio(sys.argv[1])

sys.stdout.flush()
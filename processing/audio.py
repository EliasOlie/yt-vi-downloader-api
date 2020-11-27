from pytube import YouTube
import sys

def down_audio(vurl) -> str:
    
    yt = YouTube(vurl)

    audip_opt = yt.streams.get_audio_only()

    audip_opt.download('processing/output')

    if '.' in yt.title:
        title = f'{yt.title}mp4'
    else:
        title = f'{yt.title}.mp4'  

    return title    

#down_audio(sys.argv[1])

def processing(arg):
    title = down_audio(arg)
    return title

processing(sys.argv[1])

sys.stdout.flush()
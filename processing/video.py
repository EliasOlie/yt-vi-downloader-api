from pytube import YouTube
import sys

def down_video(vurl) -> str:
    
    yt = YouTube(vurl)

    video_opt = yt.streams.first()

    video_opt.download('processing/output')

    print('Done!')
    
down_video(sys.argv)

sys.stdout.flush()
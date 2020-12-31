from pytube import YouTube
import sys

def down_audio(vurl) -> str:
    
    yt = YouTube(vurl)

    audip_opt = yt.streams.get_audio_only()

    audip_opt.download('processing/output')
 
def title(args):
    yt = YouTube(args)

    if '.' in yt.title:
        title = f'{yt.title}mp4'
    else:
        title = f'{yt.title}.mp4'
    
    return {"Error":False, "Title":title}   

def processing(link):
    
    #down_audio(link)    
    
    titulo = title(link)

    return print(titulo['Title'])

# print('Abaixo vem a saida:') DEBUG
# print(sys.argv[1])

#processing(sys.argv[1])
processing('https://www.youtube.com/watch?v=DHLPuJNIHzw&ab_channel=EliasOliveira-JornadaDev')

sys.stdout.flush()
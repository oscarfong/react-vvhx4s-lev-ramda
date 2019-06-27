
  getXProdWithScoreCSV() {
    const fnCSV = cc => cc[0] + "," + cc[1] + "," + cc[2]  ;

    const ansCSVAllArray = R.map (fnCSV, this.getXProdWithScore()) ;

    const ansCSVAllStr = R.reduce( (a,b) => a + b + "\n" , "", ansCSVAllArray) ;

    return ansCSVAllStr;
  }




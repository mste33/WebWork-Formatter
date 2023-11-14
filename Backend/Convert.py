#Wrong str to correct:
#Symbolab: \sqrt{x} ;  x^2 ; x^{22} ; \pi ; \log _9\left(8\right) ; \frac{8}{5} ; \frac{\frac{5}{6}}{7} ; \div ; 9\div 7\times 8 ;
#\left|x\right|
def my_function(fequation):
  #Logs, fractions
  fequation.replace("\times","*")
  fequation.replace("\div","/")
  #fequation.replace("\sqrt","sqrt")
  #fequation.replace("\pi","pi")
  fequation.replace("^","**")
  fequation.replace("\left|","abs(")
  fequation.replace("\right|",")")
  fequation.replace("\left|","abs(")
  fequation.replace("\","")
  fequation.replace("{","(")
  fequation.replace("}",")")
  #ln()
  fequation.replace("\ln \left(","ln(")
  fequation.replace("\right)",")")
  fequation.replace

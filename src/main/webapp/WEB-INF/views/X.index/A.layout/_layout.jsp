<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>   
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>     
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
     <head profile="http://www.w3.org/2005/10/profile">
          <meta charset="UTF-8"><tiles:insertAttribute name="metaTop" />
          <title><tiles:insertAttribute name="title" /></title>
     </head>
     <body>
     
          <div class="container">
               <header>
                    <tiles:insertAttribute name="header" />     
               </header>
               <section class="content">
                    <tiles:insertAttribute name="content" />     
               </section>
               <footer>
                    <tiles:insertAttribute name="footer" />     
               </footer>
          </div>
          
          <tiles:insertAttribute name="metaBottom" />


          <!-- layout JS -->
     </body>
</html>






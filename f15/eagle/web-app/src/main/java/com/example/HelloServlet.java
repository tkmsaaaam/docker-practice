package com.example;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet {
    
  public void doGet (HttpServletRequest req, HttpServletResponse res)
    throws ServletException, IOException {
        
    PrintWriter out = res.getWriter();
    out.println("<html><body>");
    out.println("<h1>Hello !!</h1>");
    out.println("<p>");
    out.println(System.getenv("ENV_NAME"));
    out.println("</p>");
    out.println("</body></html>");
  }
}

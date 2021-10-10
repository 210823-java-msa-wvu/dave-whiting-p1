package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.Employee;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.revature.services.EmployeeServices;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginController implements FrontController {

    {System.out.println("in LoginController class");}

    static Employee e = new Employee();

    private Logger log = LogManager.getLogger(LoginController.class);
    private EmployeeServices employeeServices = new EmployeeServices();

    private ObjectMapper om = new ObjectMapper();

    @Override
    public void process(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println("Username: " + username + " Password: " + password);
        e = employeeServices.login(username,password);

        System.out.println("Employee after login: " + e.toString());

        //make cookie here??
        if (e.employeeId > 0) {
            response.sendRedirect("static/employees.html");
            //add cookie ??
            // add object mapper??
            //response.getWriter().write(om.writeValueAsString(e));
            //if (e.isDepartmentHead) {
            //    response.sendRedirect("static/departmentheads.html");
            //} else {response.sendRedirect("static/reimbursements.html");}
        } else {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid login credentials");
        }
    }
}

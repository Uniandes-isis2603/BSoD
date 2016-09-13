/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.rest.Restaurante.dtos;

/**
 *
 * @author jdguz
 */
public class ClienteDTO 
{
    private Long id;
    
    private String nombre;
    
    private String apellidos;
    
    private String direccion;
    
    private int telefono;
    
    // Asociacion a tarjeta de puntos
    private TarjetaPuntosDTO tarjetaPuntos;
    
    public ClienteDTO()
    {   }
    
    public ClienteDTO(Long pId, String pNombre, String pApellidos, String pDireccion, int pTelefono, TarjetaPuntosDTO pTarjetaPuntos)
    {
        super();
        this.id = pId;
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.direccion = pDireccion;
        this.telefono = pTelefono;
        this.tarjetaPuntos = pTarjetaPuntos;
    }

    public Long getId() 
    {
        return id;
    }

    public void setId(Long id) 
    {
        this.id = id;
    }

    public String getNombre() 
    {
        return nombre;
    }

    public void setNombre(String nombre) 
    {
        this.nombre = nombre;
    }

    public String getApellidos() 
    {
        return apellidos;
    }

    public void setApellidos(String apellidos) 
    {
        this.apellidos = apellidos;
    }

    public String getDireccion() 
    {
        return direccion;
    }

    public void setDireccion(String direccion) 
    {
        this.direccion = direccion;
    }
    
    public int getTelefono()
    {
        return telefono;
    }
    
    public void setTelefono(int telefono)
    {
        this.telefono = telefono;
    }

    public TarjetaPuntosDTO getTarjetaPuntos() 
    {
        return tarjetaPuntos;
    }

    public void setTarjetaPuntos(TarjetaPuntosDTO tarjetaPuntos) 
    {
        this.tarjetaPuntos = tarjetaPuntos;
    }
    
    
        
    /**
     * Representacion JSON de un cliente
     * @return La representacion JSON de un DTO cliente.
     */
    @Override
    public String toString() 
    {
    	return "{ id : " + id +
                ", nombre : \""+ nombre +
                "\", apellidos : \""+apellidos
                +"\", direccion : \""+ direccion +
                "\", tarjetaPuntos : "+ tarjetaPuntos +
                ", telefono : "+telefono+" }" ;  
    }
    
}

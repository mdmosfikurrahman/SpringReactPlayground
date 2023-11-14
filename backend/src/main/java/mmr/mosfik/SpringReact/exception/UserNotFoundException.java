package mmr.mosfik.SpringReact.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("Could Not Found User with id: " + id);
    }
}

package mmr.mosfik.SpringReact.service;

import mmr.mosfik.SpringReact.exception.UserNotFoundException;
import mmr.mosfik.SpringReact.model.User;
import mmr.mosfik.SpringReact.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id){
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public User createUser(User user){
        return userRepository.save(user);
    }

    public User updateUser(User newUser, Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public void deleteUser(Long id){
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        } else {
            userRepository.deleteById(id);
        }
    }

    public void deleteAllUser(){
        userRepository.deleteAll();
    }

}

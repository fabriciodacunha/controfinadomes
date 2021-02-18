package br.com.fabriciodacunha.controfinadomes.repository;

import br.com.fabriciodacunha.controfinadomes.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}

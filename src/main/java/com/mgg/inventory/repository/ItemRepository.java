package com.mgg.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mgg.inventory.domain.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>, CrudRepository<Item, Long> {

}

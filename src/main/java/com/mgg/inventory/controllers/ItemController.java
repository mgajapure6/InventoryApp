package com.mgg.inventory.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mgg.inventory.domain.Item;
import com.mgg.inventory.domain.ItemDTO;
import com.mgg.inventory.mapper.ItemMapper;
import com.mgg.inventory.repository.ItemRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/itemService")
public class ItemController {

	@Autowired
	private ItemRepository itemRepository;

	@GetMapping("/itemList")
	public List<ItemDTO> getItemsList() {
		List<Item> list = itemRepository.findAll();
		List<ItemDTO> list2 = new ArrayList<>();
		list.stream().forEach(i->{
			list2.add(ItemMapper.itemToItemDto(i));
		});
		return list2;
	}

	@PostMapping("/saveItem")
	public Map<String, Object> saveItem(@Valid @RequestBody ItemDTO itemDto) {
		Map<String, Object> responseMap = new HashMap<>();
		Item item = itemRepository.save(ItemMapper.itemDtoToItem(itemDto));
		if (item != null) {
			responseMap.put("status", "success");
		} else {
			responseMap.put("status", "failed");
		}
		return responseMap;
	}

	@PutMapping("/updateItem")
	public Map<String, Object> updateItem(@Valid @RequestBody ItemDTO itemDto) {
		Map<String, Object> responseMap = new HashMap<>();
		Item item = itemRepository.save(ItemMapper.itemDtoToItem(itemDto));
		if (item != null) {
			responseMap.put("status", "success");
		} else {
			responseMap.put("status", "failed");
		}
		return responseMap;
	}

	@DeleteMapping("/deleteItem/{id}")
	public Boolean deleteItem(@PathVariable Long id) {
		Optional<Item> oItem = itemRepository.findById(id);
		if (oItem.isPresent()) {
			itemRepository.delete(oItem.get());
			return true;
		} else {
			return false;
		}
	}

	@GetMapping("/itemById/{id}")
	public ItemDTO getItemById(@PathVariable Long id) {
		Optional<Item> oitm = itemRepository.findById(id);
		if (oitm.isPresent()) {
			return ItemMapper.itemToItemDto(oitm.get());
		} else {
			return null;
		}

	}

}

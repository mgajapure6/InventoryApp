package com.mgg.inventory.mapper;

import com.mgg.inventory.domain.Item;
import com.mgg.inventory.domain.ItemDTO;

public class ItemMapper {
	
	public static Item itemDtoToItem(ItemDTO dto) {
		if(dto == null) {
			return null;
		}else {
			Item item = new Item();
			item.setId(dto.getId());
			item.setItemDescription(dto.getItemDescription());
			item.setItemName(dto.getItemName());
			item.setItemPrice(dto.getItemPrice());
			item.setItemImageUri(dto.getItemImageUri().getBytes());
			return item;
		}
	}
	
	public static ItemDTO itemToItemDto(Item item) {
		if(item == null) {
			return null;
		}else {
			ItemDTO dto = new ItemDTO();
			dto.setId(item.getId());
			dto.setItemDescription(item.getItemDescription());
			dto.setItemName(item.getItemName());
			dto.setItemPrice(item.getItemPrice());
			dto.setItemImageUri(new String(item.getItemImageUri()));
			return dto;
		}
	}

}

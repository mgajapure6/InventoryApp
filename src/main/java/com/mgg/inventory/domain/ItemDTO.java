package com.mgg.inventory.domain;

import javax.validation.constraints.NotNull;

public class ItemDTO {

	private Long id;
	@NotNull
	private String itemName;
	private String itemDescription;
	@NotNull
	private Double itemPrice;
	private String itemImageUri;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getItemDescription() {
		return itemDescription;
	}

	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}

	public Double getItemPrice() {
		return itemPrice;
	}

	public void setItemPrice(Double itemPrice) {
		this.itemPrice = itemPrice;
	}

	public String getItemImageUri() {
		return itemImageUri;
	}

	public void setItemImageUri(String itemImageUri) {
		this.itemImageUri = itemImageUri;
	}

	public ItemDTO(Long id, String itemName, String itemDescription, Double itemPrice, String itemImageUri) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.itemDescription = itemDescription;
		this.itemPrice = itemPrice;
		this.itemImageUri = itemImageUri;
	}

	public ItemDTO() {
		super();
	}

}

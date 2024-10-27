import { SORT_ORDER } from '../constants/sortOrder.js';
import { ContactsCollection } from '../db/contactsSchema.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page,
  perPage,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsAll = ContactsCollection.find();

  if (filter.isFavourite) {
    contactsAll.where('isFavourite').equals(filter.isFavourite);
  }

  if (filter.contactType) {
    contactsAll.where('contactType').equals(filter.contactType);
  }

  if (filter.userId) {
    contactsAll.where('userId').equals(filter.userId);
  }

  const [contactsCount, contacts] = await Promise.all([
    ContactsCollection.find().merge(contactsAll).countDocuments(),
    contactsAll
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContact = async (filter) => {
  const contact = await ContactsCollection.findOne(filter);
  return contact;
};

export const createContact = async (payload) => {
  const contacts = await ContactsCollection.create(payload);
  return contacts;
};

export const updateContact = async (filter, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(filter, payload, {
    ...options,
    new: true,
    includeResultMetadata: true,
  });

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
  };
};

export const deleteContact = async (filter) => {
  const contact = await ContactsCollection.findOneAndDelete(filter);
  return contact;
};

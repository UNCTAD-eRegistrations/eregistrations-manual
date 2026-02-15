# B.6. User rights in GDB (p.183-188) -- Update Analysis

**Changes detected:** 2
**Status:** Ready for review
**Analyzed:** 2026-02-15

---

## User rights overview
**UNCHANGED**

> User rights management enables admin users to grant or take away rights and privileges to other users.

---

## a) User rights page layout
**UNCHANGED**

> Click user button, select User management. Left side: list of registered users. Right side: rights granted to selected user.

---

## Search existing user
**UNCHANGED**

> Search an existing user from the list of registered users.

---

## Import user from CAS/Keycloak
**VERIFY**

**Original:**
> Create a new user: Must be registered in CAS/KC first. Import by clicking icon next to search field, enter user ID.

**Needs verification:** The CAS/Keycloak user import feature is documented and likely still works the same way. However, Keycloak integration may have evolved -- for example, new import options, batch import capabilities, or changes to how Keycloak IDs are handled.
**Screenshot:** Verify -- user import dialog and options.

---

## Rights columns and actions
**UNCHANGED**

> Right side: rights - Resources (databases) in first column. Actions: Read, Create, Update, Publish, Delete, User rights. Toggles define actions per database.

---

## Groups of databases
**UNCHANGED**

> Groups of databases are listed under their group. Rights can be granted to group or specific database.

---

## b) Database structure rights
**UNCHANGED**

> Read (needs Data toggle on), Update (Save button appears), Publish (Publish button appears), Delete (Delete button appears).

---

## c) Data User rights (Generic)
**UNCHANGED**

> Read, Update (Edit button per entry), Delete (Delete button per entry).

---

## d) Data User rights (field level restrictions)
**UNCHANGED**

> Click 'restrictions' button. Grant read/update rights to specific columns or records matching filter conditions.

---

## e) Toggle behavior rules
**UNCHANGED**

> GREEN=fully authorised, GREY=not authorised, YELLOW=partially authorised. Parent GREEN=all children GREEN. Parent YELLOW=at least one child YELLOW or GREY. Parent GREY=all children GREY.

---

## Keycloak integration evolution
**VERIFY**

> Keycloak integration for user management may have evolved since July 2025, potentially including new SSO features, improved user synchronization, or changes to how user identities are managed.

**Needs verification:** Keycloak is the identity management system used by eRegistrations. While the basic import workflow is likely the same, Keycloak itself receives updates and the eRegistrations integration may have been enhanced.
**Screenshot:** Unknown -- verify if new Keycloak-related features have been added.

---

## Summary

| Block | Status | Screenshot |
|-------|--------|------------|
| User rights overview | UNCHANGED | Same |
| User rights page layout | UNCHANGED | Same |
| Search existing user | UNCHANGED | Same |
| Import from CAS/Keycloak | VERIFY | Verify |
| Rights columns and actions | UNCHANGED | Same |
| Groups of databases | UNCHANGED | Same |
| Database structure rights | UNCHANGED | Same |
| Data rights (generic) | UNCHANGED | Same |
| Data rights (field level) | UNCHANGED | Same |
| Toggle behavior rules | UNCHANGED | Same |
| Keycloak integration | VERIFY | Unknown |

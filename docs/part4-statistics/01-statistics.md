---
title: "Statistics - A. Overview + B. Types of statistics"
description: "eRegistrations Manual - Statistics - A. Overview + B. Types of statistics (Original pages p.189-193)"
---

# Statistics - A. Overview + B. Types of statistics


<!-- PDF Screenshots -->
??? example "Original Manual Screenshots"
    ![pdf-statistics-01.png](../screenshots/pdf-statistics-01.png){ loading=lazy }

    ![pdf-statistics-02.png](../screenshots/pdf-statistics-02.png){ loading=lazy }

    ![pdf-statistics-03.png](../screenshots/pdf-statistics-03.png){ loading=lazy }

    ![pdf-statistics-04.png](../screenshots/pdf-statistics-04.png){ loading=lazy }

    ![pdf-statistics-05.png](../screenshots/pdf-statistics-05.png){ loading=lazy }

    ![pdf-statistics-06.png](../screenshots/pdf-statistics-06.png){ loading=lazy }

    ![pdf-statistics-07.png](../screenshots/pdf-statistics-07.png){ loading=lazy }

    ![pdf-statistics-08.png](../screenshots/pdf-statistics-08.png){ loading=lazy }

    ![pdf-statistics-09.png](../screenshots/pdf-statistics-09.png){ loading=lazy }

    ![pdf-statistics-10.png](../screenshots/pdf-statistics-10.png){ loading=lazy }

    ![pdf-statistics-11.png](../screenshots/pdf-statistics-11.png){ loading=lazy }

    ![pdf-statistics-12.png](../screenshots/pdf-statistics-12.png){ loading=lazy }

    ![pdf-statistics-13.png](../screenshots/pdf-statistics-13.png){ loading=lazy }

    ![pdf-statistics-14.png](../screenshots/pdf-statistics-14.png){ loading=lazy }

    ![pdf-statistics-15.png](../screenshots/pdf-statistics-15.png){ loading=lazy }


!!! info "Update Summary (3 changes detected)"
    3 changes detected: Statistics module core functionality is stable.
    New report types or dashboard improvements may exist.
    Filter options may have expanded.
    Export capabilities may have improved.


<!-- Live BPA Screenshot: live-statistics -->
<div class="live-screenshot" markdown>

![Statistics - Platform analytics and reporting](../screenshots/live-statistics.png){ loading=lazy }
*Current BPA view (2026-02-15) — [Statistics](https://bpa.cuba.eregistrations.org/services){ target=_blank }*
*Statistics are generated from service data and processing history.*


</div>
<!-- /Live BPA Screenshot: live-statistics -->

## A. Overview

Statistics module is a tool for registered users to see statistical information about files and processes in eRegistrations system. It can also present KPI (Key Performance Indicators) for managers. Panel at top enables switching between types of statistics, changing language or logging out. Every type of statistics has its own set of filters and tools.

<!-- Verify screenshot: Statistics entry view and top panel -- verify current appearance and navigation options -->

---

## 1. Roles statistics

Purpose: provide information about the number of files that obtained a specific status in a given service role for a defined period of time. Filters: Filter empty rows, Show inactive services, Date field (calendar for period selection), Service filter, Registration filter, Status filter. Data can be broken down into days/weeks/months/years. Export to excel or PDF.

<!-- Verify screenshot: Roles statistics view -- verify current appearance and filter options -->

---

## 2. Certificates issued

Purpose: provide information about the number of certificates generated for a given service within a period. Filters: Certificates filter (lists certificate across services).

<!-- Verify screenshot: Certificates issued view -- verify current appearance -->

---

## 3. Operators

Purpose: provide information on specific operator activity - number of files processed through a role, broken down into statuses (Processed, Approved, Sent back, Rejected). Filters: Operator filter (type-ahead input), Roles filter.

<!-- Verify screenshot: Operators statistics view -- verify current appearance -->

---

## 4. Times per Role

Purpose: information about how much time the file spent in a given role. Shows average, minimum and maximum time for processed files.

<!-- Verify screenshot: Times per Role view -- verify current appearance -->

---

## 5. Times per operator

Purpose: how much time every operator spent processing files in a given role. Shows average, minimum and maximum time.

<!-- Verify screenshot: Times per operator view -- verify current appearance -->

---

## 6. Rejection reasons

Provides rejection reasons for files processed and rejected or sent back for correction in Part B revision role. Filter by service name and Status (2-Sent back, 3-Rejected). Dashboard shows: rejection reason, status code, operator, role name, date of rejection.

<!-- Verify screenshot: Rejection reasons dashboard -- verify current appearance -->

---

## New statistics types or reports

!!! question "Needs Verification"
    The statistics module currently documents 6 types of statistics (Roles, Certificates issued, Operators, Times per Role, Times per operator, Rejection reasons). Additional report types may have been added to the platform. The statistics navigation panel should be verified to confirm the complete list of available statistics types.

The statistics module may have added new types of statistics or reporting capabilities since July 2025. For example, new report types could cover application completion rates, average processing times across services, or user registration trends.

---

## Enhanced filter and export options

!!! question "Needs Verification"
    While the documented filters and export options (Excel, PDF) are likely still present, new filter options or export formats may have been added. For example, there could be new date range presets, additional grouping options, or new export formats (CSV, API access). Each statistics type's filter panel should be compared against the manual to identify any additions.

Individual statistics types may have received enhanced filter options or additional export formats since July 2025.

---
